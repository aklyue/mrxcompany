import React from 'react'

import c from "./Contacts.module.scss"

function Contacts() {
    return (
        <div className={c.container}>
            <div className={c.widgetBox}>
                <h1 className={c.widgetTitle}>Контактная информация</h1>
                <p>
                    Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit turpis. Ultricies erat pretium risus quam tincidunt non viverra porttitor. Sollicitudin enim nunc in nisi donec vel. Blandit mauris vitae amet aliquet ultrices mauris pellentesque. Non ipsum commodo, sit mi sit netus aenean nisl. Donec sit pellentesque enim, vestibulum. <br /><br />Condimentum hac adipiscing purus in augue nisi. Convallis ut nisi.
                    Feugiat gravida proin arcu tellus ipsum posuere nisl, consectetur scelerisque. Posuere ipsum tellus dignissim etiam lorem ultrices risus viverra. Purus volutpat phasellus viverra vestibulum quis. Gravida pretium odio enim ut id tempus semper. Urna cum at in iaculis mauris at. Tellus, a euismod tincidunt eu orci faucibus. Mi faucibus pellentesque molestie nunc, et, tellus. Neque cras mattis dolor id. Maecenas vivamus tristique donec neque id convallis. Feugiat fusce at est at.<br /> <br />
                    Vitae nec eget blandit id nisl. Sit ac dictum lorem mauris posuere sit. Gravida commodo egestas pharetra, mi interdum. Ullamcorper pulvinar hac risus egestas fusce nunc. Vel auctor proin integer ut lacus, sed neque id dictum. At enim quis eu, mattis aliquet varius in eu venenatis.<br /> <br />
                    Quisque diam elit donec orci sed dolor. Neque sed sit tortor eget urna magna interdum feugiat ut. In purus rhoncus egestas euismod morbi. Ut velit facilisi in cras tempus turpis sapien ipsum, mattis. Tempor sit nulla ac lorem placerat congue. Nulla purus vestibulum suscipit pellentesque risus non.
                </p>

                <ul className={c.list}>
                    <li className={c.point}>
                        Телефон компании: 89124584234
                    </li>
                    <li className={c.point}>
                        Эл. адрес: mrxcompany@gmail.com
                    </li>
                    <li className={c.point}>
                        Телефон руководства: 89241236565
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contacts