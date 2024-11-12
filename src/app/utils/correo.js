
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const sendEmail = async (emailData) => {
  const { to, text, html } = emailData;

  if (!to  || (!text && !html)) {
    console.error("Error: Faltan campos obligatorios para enviar el correo. Asegúrate de proporcionar 'to', 'subject', y al menos 'text' o 'html'.");
    return;
  }

  try {
    console.log("Enviando correo con los siguientes datos:", emailData);
    // Enviar el correo electrónico
    const response = await fetch(`${API_URL}/gmail/send-mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to,text, html }),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud de envío de correo: ${response.status}`);
    }

    const result = await response.json(); // Procesar la respuesta del servidor
    console.log("Correo enviado correctamente:", result);
    return result;

  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};

// Ejemplo de uso desde otro archivo
export const notifyUser = async (userEmail, emailContent) => {
  const { text, html } = emailContent;

  console.log("Notificando al usuario con el siguiente contenido:", emailContent);

  try {
    await sendEmail({ to: userEmail, text, html });
  } catch (error) {
    console.error("Error al notificar al usuario:", error);
  }
};

// Función para enviar correo cuando cambia el estatus de un pedido
export const notifyOrderStatusChange = async (userEmail) => {
  const text = `Hola, el estado de tu pedido  ha cambiado a: Listo.`;
  const html = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <p>Hola,</p>
        <p style="font-size: 1.2em; color: #077d6b;"><strong>Tu Pedido esta Listo</strong></p>
      </div>
    </div>
  `;

  try {
    await sendEmail({ to: userEmail,  text, html });
  } catch (error) {
    console.error("Error al notificar el cambio de estado del pedido:", error);
  }
};