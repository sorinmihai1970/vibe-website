import nodemailer from 'nodemailer';

const FROM = process.env.GMAIL_FROM ?? 'Vibe Coffee <sorinmihai1970@gmail.com>';
const ADMIN = process.env.GMAIL_ADMIN ?? 'sorinmihai1970@gmail.com';

function getTransport() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'sorinmihai1970@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

function formatDataOra(data: string, ora: string) {
  const oraNormalizata = ora.length === 8 ? ora.slice(0, 5) : ora; // "15:00:00" → "15:00"
  const d = new Date(`${data}T${oraNormalizata}:00`);
  const tz = 'Europe/Bucharest';
  const zi = d.toLocaleDateString('ro-RO', { weekday: 'long', timeZone: tz });
  const dataFmt = d.toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', timeZone: tz });
  return { zi: zi.charAt(0).toUpperCase() + zi.slice(1), data: dataFmt, ora: oraNormalizata };
}

function emailLayout(content: string) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet">
</head>
<body style="margin:0;padding:24px;background:#f5f5f0;font-family:sans-serif">
  <div style="max-width:600px;margin:0 auto;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
    <div style="background:#2C1810;padding:24px 28px 20px">
      <p style="margin:0;font-family:'DM Serif Display',Georgia,serif;color:#F5E6C8;font-size:24px;font-weight:400">Vibe Coffee</p>
      <p style="margin:4px 0 0;color:#F5E6C8;opacity:0.5;font-size:13px">București</p>
    </div>
    <div style="background:#F5E6C8;padding:32px 28px">
      ${content}
      <div style="border-top:1px solid rgba(59,37,7,0.2);margin-top:32px;padding-top:20px">
        <p style="margin:0;color:#3B2507;opacity:0.45;font-size:12px">Vibe Coffee · București · str. Cafelei nr. 12</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

export async function trimiteEmailRezervare({
  email, nume, data, ora, nr_persoane,
}: {
  email: string; nume: string; data: string; ora: string; nr_persoane: number;
}) {
  const { zi, data: dataFmt } = formatDataOra(data, ora);
  const persoane = nr_persoane === 1 ? '1 persoană' : `${nr_persoane} persoane`;

  const content = `
    <h2 style="margin:0 0 20px;color:#2C1810;font-family:'DM Serif Display',Georgia,serif;font-size:26px;font-weight:400">
      ${zi} · ${dataFmt} · ${ora}
    </h2>
    <p style="margin:0 0 12px;color:#3B2507;font-size:16px;line-height:1.6">
      <strong>${nume}</strong>, ai solicitat o rezervare la Vibe Coffee pentru
      <strong>${zi}, ${dataFmt}</strong> la ora <strong>${ora}</strong>, pentru <strong>${persoane}</strong>.
    </p>
    <p style="margin:0 0 24px;color:#3B2507;opacity:0.7;font-size:15px;line-height:1.6">
      O să te anunțăm de îndată ce rezervarea va fi confirmată.
    </p>
    <a href="https://vibe-website-theta.vercel.app/rezervari"
       style="display:inline-block;background:#2C1810;color:#F5E6C8;text-decoration:none;padding:12px 28px;border-radius:50px;font-size:14px;font-weight:600">
      Fă o altă rezervare
    </a>
  `;

  await getTransport().sendMail({
    from: FROM,
    to: email,
    subject: `Rezervare Vibe Coffee — ${zi}, ${dataFmt} la ${ora}`,
    html: emailLayout(content),
  });
}

export async function trimiteEmailAdmin({
  email, nume, telefon, data, ora, nr_persoane,
}: {
  email: string; nume: string; telefon: string; data: string; ora: string; nr_persoane: number;
}) {
  const { zi, data: dataFmt } = formatDataOra(data, ora);
  const persoane = nr_persoane === 1 ? '1 persoană' : `${nr_persoane} persoane`;

  const content = `
    <h2 style="margin:0 0 20px;color:#2C1810;font-family:'DM Serif Display',Georgia,serif;font-size:26px;font-weight:400">
      Rezervare nouă
    </h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
      <tr><td style="padding:8px 0;color:#3B2507;opacity:0.6;font-size:14px;width:120px">Nume</td><td style="padding:8px 0;color:#2C1810;font-size:15px;font-weight:600">${nume}</td></tr>
      <tr><td style="padding:8px 0;color:#3B2507;opacity:0.6;font-size:14px">Email</td><td style="padding:8px 0;color:#2C1810;font-size:15px">${email}</td></tr>
      <tr><td style="padding:8px 0;color:#3B2507;opacity:0.6;font-size:14px">Telefon</td><td style="padding:8px 0;color:#2C1810;font-size:15px">${telefon}</td></tr>
      <tr><td style="padding:8px 0;color:#3B2507;opacity:0.6;font-size:14px">Data</td><td style="padding:8px 0;color:#2C1810;font-size:15px;font-weight:600">${zi}, ${dataFmt} la ${ora}</td></tr>
      <tr><td style="padding:8px 0;color:#3B2507;opacity:0.6;font-size:14px">Persoane</td><td style="padding:8px 0;color:#2C1810;font-size:15px">${persoane}</td></tr>
    </table>
    <a href="https://vibe-website-theta.vercel.app/admin"
       style="display:inline-block;background:#2C1810;color:#F5E6C8;text-decoration:none;padding:12px 28px;border-radius:50px;font-size:14px;font-weight:600">
      Vezi în admin
    </a>
  `;

  await getTransport().sendMail({
    from: FROM,
    to: ADMIN,
    subject: `[Rezervare nouă] ${nume} — ${zi}, ${dataFmt} la ${ora}`,
    html: emailLayout(content),
  });
}

export async function trimiteEmailStatus({
  nume, email, data, ora, nr_persoane, status,
}: {
  nume: string; email: string; data: string; ora: string; nr_persoane: number; status: 'confirmat' | 'respins';
}) {
  const { zi, data: dataFmt } = formatDataOra(data, ora);
  const persoane = nr_persoane === 1 ? '1 persoană' : `${nr_persoane} persoane`;
  const confirmat = status === 'confirmat';

  const content = confirmat ? `
    <h2 style="margin:0 0 20px;color:#2C1810;font-family:'DM Serif Display',Georgia,serif;font-size:26px;font-weight:400">
      Rezervare confirmată ✓
    </h2>
    <p style="margin:0 0 12px;color:#3B2507;font-size:16px;line-height:1.6">
      <strong>${nume}</strong>, rezervarea ta la Vibe Coffee a fost <strong>confirmată</strong>.
    </p>
    <p style="margin:0 0 24px;color:#3B2507;font-size:15px;line-height:1.6">
      Te așteptăm <strong>${zi}, ${dataFmt}</strong> la ora <strong>${ora}</strong> — ${persoane}.
    </p>
    <a href="https://vibe-website-theta.vercel.app/locatie"
       style="display:inline-block;background:#2C1810;color:#F5E6C8;text-decoration:none;padding:12px 28px;border-radius:50px;font-size:14px;font-weight:600">
      Cum ajungi la noi
    </a>
  ` : `
    <h2 style="margin:0 0 20px;color:#2C1810;font-family:'DM Serif Display',Georgia,serif;font-size:26px;font-weight:400">
      Rezervare anulată
    </h2>
    <p style="margin:0 0 12px;color:#3B2507;font-size:16px;line-height:1.6">
      <strong>${nume}</strong>, din păcate rezervarea ta pentru <strong>${zi}, ${dataFmt}</strong> la ora <strong>${ora}</strong> nu a putut fi onorată.
    </p>
    <p style="margin:0 0 24px;color:#3B2507;opacity:0.7;font-size:15px;line-height:1.6">
      Te invităm să încerci o altă dată — cu drag te așteptăm la Vibe Coffee.
    </p>
    <a href="https://vibe-website-theta.vercel.app/rezervari"
       style="display:inline-block;background:#2C1810;color:#F5E6C8;text-decoration:none;padding:12px 28px;border-radius:50px;font-size:14px;font-weight:600">
      Fă o altă rezervare
    </a>
  `;

  await getTransport().sendMail({
    from: FROM,
    to: email,
    subject: confirmat
      ? `Rezervare confirmată — ${zi}, ${dataFmt} la ${ora}`
      : `Rezervare Vibe Coffee — actualizare`,
    html: emailLayout(content),
  });
}
