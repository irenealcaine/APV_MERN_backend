import nodemailer from 'nodemailer'

const emailOlvidePassword = async (datos) => {
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
    subject: "Reestablece tu contraseña en APV",
    text: 'Reestablece tu contraseña',
    html: `
      <p>Hola ${nombre}, has solicitado reestablecer tu contraseña</p>
      <p>Haz click en el siguiente enlace: <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer contraseña</a></p>
      <p>Si no has solicitado esto, puedes ignorar este mensaje</p>
    `
  })

  console.log("mensaje enviado %s", info.messageId)
}

export default emailOlvidePassword
