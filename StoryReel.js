import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
               image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpicserio.com%2F1080x1920-hd-wallpaper-portrait.html&psig=AOvVaw1j6Qabh-ik18HwQBzGsx0A&ust=1598992896894000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiu2fCmxusCFQAAAAAdAAAAABAD'
               profileSrc='https://miro.medium.com/fit/c/160/160/1*sa5RP49sfOiL4gMSBLRTHQ.png'
               title='Nibirman'
            />
            <Story
               image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oakridge.in%2Fyou-said-it-we-did-it-gachibowli-feb-14%2Fclassroom-makeovers-for-better-learning%2Fattachment%2Fsample-jpg-image-500kb%2F&psig=AOvVaw2mM1YqD6lP_B44P4BRO8uz&ust=1599058488447000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi7wJybyOsCFQAAAAAdAAAAABAb'
               profileSrc='https://i.ytimg.com/vi/JaME9KBhyI0/maxresdefault.jpg'
               title='Avatar 1'
            />
            <Story
               image='F:\Nick404\Photos\Wallpaper'
               profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6Fzvybh9doMxyM34K4q_dO065TPHrMYK4zQ&usqp=CAU'
               title='Avatar 2'
            />
            <Story
               image='F:\Nick404\Photos\Wallpaper2'
               profileSrc='https://media-exp1.licdn.com/dms/image/C5103AQEJnZcCcFogEg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=jPtI2b6ZxXI1KdRzyFnJFOW_zauGBUGB1cZ-aVc2wB8'
               title='Avatar 3'
            />
        </div>
    )
}

export default StoryReel
