$(document).ready(function () {
    //  Slider
    if (window.location.href.indexOf('index') > -1) {
        $('.slider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: false,
        });

        //  Post
        const posts = [
            {
                title: 'Titulo del post 1',
                date: moment().format('D MMMM YYYY'),
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum blanditiis corporis, dignissimos dicta reprehenderit nisi velit modi esse officiis neque animi explicabo ab et soluta quasi minima deserunt id at. Cupiditate nobis deserunt similique quos repellat veniam dolore corporis vel non quam dolorum sunt modi, excepturi numquam quisquam dignissimos quasi! Impedit deserunt expedita neque placeat at? Incidunt impedit repellat ullam excepturi, unde error ipsa est omnis nobis porro cumque quam. Facilis dolorum fuga qui, omnis commodi quibusdam soluta officiis nihil tempora saepe vitae sunt neque accusamus dolorem eum recusandae error sequi. Dicta praesentium minus in laudantium nesciunt, quo optio! ',
            },
            {
                title: 'Titulo del post 2',
                date: moment().format('D MMMM YYYY'),
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum blanditiis corporis, dignissimos dicta reprehenderit nisi velit modi esse officiis neque animi explicabo ab et soluta quasi minima deserunt id at. Cupiditate nobis deserunt similique quos repellat veniam dolore corporis vel non quam dolorum sunt modi, excepturi numquam quisquam dignissimos quasi! Impedit deserunt expedita neque placeat at? Incidunt impedit repellat ullam excepturi, unde error ipsa est omnis nobis porro cumque quam. Facilis dolorum fuga qui, omnis commodi quibusdam soluta officiis nihil tempora saepe vitae sunt neque accusamus dolorem eum recusandae error sequi. Dicta praesentium minus in laudantium nesciunt, quo optio! ',
            },
            {
                title: 'Titulo del post 3',
                date: moment().format('D MMMM YYYY'),
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum blanditiis corporis, dignissimos dicta reprehenderit nisi velit modi esse officiis neque animi explicabo ab et soluta quasi minima deserunt id at. Cupiditate nobis deserunt similique quos repellat veniam dolore corporis vel non quam dolorum sunt modi, excepturi numquam quisquam dignissimos quasi! Impedit deserunt expedita neque placeat at? Incidunt impedit repellat ullam excepturi, unde error ipsa est omnis nobis porro cumque quam. Facilis dolorum fuga qui, omnis commodi quibusdam soluta officiis nihil tempora saepe vitae sunt neque accusamus dolorem eum recusandae error sequi. Dicta praesentium minus in laudantium nesciunt, quo optio! ',
            },
            {
                title: 'Titulo del post 4',
                date: moment().format('D MMMM YYYY'),
                content:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum blanditiis corporis, dignissimos dicta reprehenderit nisi velit modi esse officiis neque animi explicabo ab et soluta quasi minima deserunt id at. Cupiditate nobis deserunt similique quos repellat veniam dolore corporis vel non quam dolorum sunt modi, excepturi numquam quisquam dignissimos quasi! Impedit deserunt expedita neque placeat at? Incidunt impedit repellat ullam excepturi, unde error ipsa est omnis nobis porro cumque quam. Facilis dolorum fuga qui, omnis commodi quibusdam soluta officiis nihil tempora saepe vitae sunt neque accusamus dolorem eum recusandae error sequi. Dicta praesentium minus in laudantium nesciunt, quo optio! ',
            },
        ];

        const postsDiv = $('#posts');

        posts.forEach((item, index) => {
            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">Fecha publicacion ${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer mas...</a>
            </article>
        `;

            postsDiv.append(post);
        });
    }

    //  Themes
    const theme = $('#theme');

    $('#to-green').click(() => {
        theme.attr('href', 'css/green.css');
    });
    $('#to-red').click(() => {
        theme.attr('href', 'css/red.css');
    });
    $('#to-blue').click(() => {
        theme.attr('href', 'css/blue.css');
    });

    //  Scroll up
    $('.subir').click(e => {
        e.preventDefault;

        $('html, body').animate(
            {
                scrollTop: 0,
            },
            500
        );
    });

    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }

    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(() => {
            const reloj = moment().format('HH:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);
    }
});
