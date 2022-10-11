import {MdSpaceDashboard,MdPayments} from 'react-icons/md'
import {AiFillAppstore,AiOutlineUsergroupAdd, AiOutlineProfile} from 'react-icons/ai'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {GiTargetPoster,GiArchiveRegister, GiFamilyHouse} from 'react-icons/gi'
import {HiOutlineLogin}  from 'react-icons/hi'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'

export interface Link  {
    name:string
    list: Array<{name:string, link: string, iconName: IconType}>
    iconName: IconType
    dis:string
}

export const navLinks:Link[] = [
    {
        name:'Dashoard',
        list:[
            {name:'Home', link:'/', iconName:SiHomeassistantcommunitystore },
            {name:'Statistics', link:'/statistics', iconName:MdSpaceDashboard}
        ],
        iconName: MdSpaceDashboard,
        dis: 'translate-x-0'
    },
    {
        name:'Applications',
        list:[
            {name:'Poster', link:'/apps/poster', iconName:GiTargetPoster},
            {name:'Register', link:'/apps/register', iconName:GiArchiveRegister},
            {name:'Statement', link: '/apps/statements', iconName:AiOutlineProfile}
        ],
        iconName: GiArchiveRegister,
        dis:'translate-x-16'
        
    },
    {
        name:'List',
        list:[
            {name:'Clients', link:'/list/clients', iconName:AiOutlineUsergroupAdd },
            {name:'Payments', link:'/list/payments', iconName:MdPayments},
            {name:'Houses', link:'/list/houses', iconName:GiFamilyHouse}
        ],
        iconName:GiTargetPoster,
        dis:'translate-x-32'
        
    },
    {
        name:'Authentication',
        list:[
            {name:'Login', link:'/api/auth/signin', iconName:HiOutlineLogin}
        ],
        iconName:HiOutlineLogin,
        dis:'translate-x-48'

    }
]