const Contact = () => {
	return (
		<div className="contact">
			<ul className="contact__links">
				<li className="contact__links--linkedin">
					<a
						href="https://www.linkedin.com/in/dhuangxie/"
						target="_blank">
						<img
							src="linkedin.svg"
							alt="Linkedin"
						/>
					</a>
					<p className="contact__info contact__info--linkedin">
						¡Sígueme en Linkedin para conectar conmigo!
					</p>
				</li>
				<li>
					<a
						className="contact__links--phone"
						href="tel:655966777">
						<img
							src="phone.svg"
							alt="Llámame al 655966777"
						/>
					</a>
					<p className="contact__info contact__info--phone">Llámame al 655966777</p>
				</li>
				<li>
					<a
						className="contact__links--email"
						href="mailto:dhuangxie@gmail.com">
						<img
							src="email.svg"
							alt="Contacta conmigo a través de dhuangxie@gmail.com"
						/>
					</a>
					<p className="contact__info contact__info--email">
						Contacta conmigo a través de dhuangxie@gmail.com
					</p>
				</li>
			</ul>
		</div>
	);
};

export default Contact;
