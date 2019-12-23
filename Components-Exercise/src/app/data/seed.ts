const data = [{
    title: 'Article',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra felis. Sed maximus suscipit mollis. Nullam volutpat leo et odio imperdiet rhoncus. Donec aliquet neque purus. Quisque porttitor quam sit amet diam feugiat, a aliquam nunc pulvinar. Sed at arcu eros. Praesent lacus metus, tristique sed lectus sit amet, varius aliquam diam. Fusce bibendum nec nisi vitae ornare.Mauris non feugiat felis. Praesent mattis felis sed arcu tincidunt, eu pretium velit commodo. Etiam dignissim ex arcu, id dignissim lorem mollis vitae. Aliquam eu ligula in ipsum scelerisque varius nec posuere leo. Donec rutrum nulla nisi, sed convallis metus iaculis vel. Proin pharetra varius dapibus. Nulla facilisi. Quisque in diam ut ante dignissim efficitur at nec massa. Fusce interdum elit elit, at gravida augue lacinia vitae. Donec consectetur metus vitae blandit mollis. Aliquam porta vel odio ac hendrerit. Nulla rhoncus ex justo, vel dignissim lorem malesuada a. Nulla nec nunc egestas nullam.',
    author: 'Author 1',
    imageUrl: 'http://ichef.bbci.co.uk/news/976/cpsprodpb/10434/production/_90121666_agreementcartoon.jpg'
},
{
    title: 'Article 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra felis. Sed maximus suscipit mollis. Nullam volutpat leo et odio imperdiet rhoncus. Donec aliquet neque purus. Quisque porttitor quam sit amet diam feugiat, a aliquam nunc pulvinar. Sed at arcu eros. Praesent lacus metus, tristique sed lectus sit amet, varius aliquam diam. Fusce bibendum nec nisi vitae ornare.Mauris non feugiat felis. Praesent mattis felis sed arcu tincidunt, eu pretium velit commodo. Etiam dignissim ex arcu, id dignissim lorem mollis vitae. Aliquam eu ligula in ipsum scelerisque varius nec posuere leo. Donec rutrum nulla nisi, sed convallis metus iaculis vel. Proin pharetra varius dapibus. Nulla facilisi. Quisque in diam ut ante dignissim efficitur at nec massa. Fusce interdum elit elit, at gravida augue lacinia vitae. Donec consectetur metus vitae blandit mollis. Aliquam porta vel odio ac hendrerit. Nulla rhoncus ex justo, vel dignissim lorem malesuada a. Nulla nec nunc egestas nullam.',
    author: 'Author 2',
    imageUrl: 'http://www.digitalmeetsculture.net/wp-content/uploads/2015/04/article.jpg'
},
{
    title: 'Article 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra felis. Sed maximus suscipit mollis. Nullam volutpat leo et odio imperdiet rhoncus. Donec aliquet neque purus. Quisque porttitor quam sit amet diam feugiat, a aliquam nunc pulvinar. Sed at arcu eros. Praesent lacus metus, tristique sed lectus sit amet, varius aliquam diam. Fusce bibendum nec nisi vitae ornare.Mauris non feugiat felis. Praesent mattis felis sed arcu tincidunt, eu pretium velit commodo. Etiam dignissim ex arcu, id dignissim lorem mollis vitae. Aliquam eu ligula in ipsum scelerisque varius nec posuere leo. Donec rutrum nulla nisi, sed convallis metus iaculis vel. Proin pharetra varius dapibus. Nulla facilisi. Quisque in diam ut ante dignissim efficitur at nec massa. Fusce interdum elit elit, at gravida augue lacinia vitae. Donec consectetur metus vitae blandit mollis. Aliquam porta vel odio ac hendrerit. Nulla rhoncus ex justo, vel dignissim lorem malesuada a. Nulla nec nunc egestas nullam.',
    author: 'Author 3',
    imageUrl: 'http://i.dailymail.co.uk/i/pix/2010/04/17/article-1266852-092DE58A000005DC-112_634x411.jpg'
},
{
    title: 'Article 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra felis. Sed maximus suscipit mollis. Nullam volutpat leo et odio imperdiet rhoncus. Donec aliquet neque purus. Quisque porttitor quam sit amet diam feugiat, a aliquam nunc pulvinar. Sed at arcu eros. Praesent lacus metus, tristique sed lectus sit amet, varius aliquam diam. Fusce bibendum nec nisi vitae ornare.Mauris non feugiat felis. Praesent mattis felis sed arcu tincidunt, eu pretium velit commodo. Etiam dignissim ex arcu, id dignissim lorem mollis vitae. Aliquam eu ligula in ipsum scelerisque varius nec posuere leo. Donec rutrum nulla nisi, sed convallis metus iaculis vel. Proin pharetra varius dapibus. Nulla facilisi. Quisque in diam ut ante dignissim efficitur at nec massa. Fusce interdum elit elit, at gravida augue lacinia vitae. Donec consectetur metus vitae blandit mollis. Aliquam porta vel odio ac hendrerit. Nulla rhoncus ex justo, vel dignissim lorem malesuada a. Nulla nec nunc egestas nullam.',
    author: 'Author 4',
    imageUrl: 'https://www.seoclerk.com/pics/518476-1iDFBR1489198900.png'
},
{
    title: 'Article 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra felis. Sed maximus suscipit mollis. Nullam volutpat leo et odio imperdiet rhoncus. Donec aliquet neque purus. Quisque porttitor quam sit amet diam feugiat, a aliquam nunc pulvinar. Sed at arcu eros. Praesent lacus metus, tristique sed lectus sit amet, varius aliquam diam. Fusce bibendum nec nisi vitae ornare.Mauris non feugiat felis. Praesent mattis felis sed arcu tincidunt, eu pretium velit commodo. Etiam dignissim ex arcu, id dignissim lorem mollis vitae. Aliquam eu ligula in ipsum scelerisque varius nec posuere leo. Donec rutrum nulla nisi, sed convallis metus iaculis vel. Proin pharetra varius dapibus. Nulla facilisi. Quisque in diam ut ante dignissim efficitur at nec massa. Fusce interdum elit elit, at gravida augue lacinia vitae. Donec consectetur metus vitae blandit mollis. Aliquam porta vel odio ac hendrerit. Nulla rhoncus ex justo, vel dignissim lorem malesuada a. Nulla nec nunc egestas nullam.',
    author: 'Author 5',
    imageUrl: 'http://www.stat.columbia.edu/~gelman/teaching/literacy/images/IV.gif'
}]

export { data };