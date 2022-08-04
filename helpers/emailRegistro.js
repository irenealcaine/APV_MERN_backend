import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos
  const info = await transporter.sendMail({
    from: "APV - Administrador de pacientes de veterinaria",
    to: email,
    subject: "confirma tu cuenta en APV",
    text: 'Confirma tu cuenta',
    html: `
      <p>Hola ${nombre}, confirma tu cuenta en APV para disfrutar de nuestros servicios</p>
      <p>Tu cuenta ya está creada, solo falta confirmarla haciendo click en el siguiente enlace: <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a></p>
      <p>Si no has creado esta cuenta, puedes ignorar este mensaje</p>
    `
  })

  console.log("mensaje enviado %s", info.messageId)
}

export default emailRegistro
