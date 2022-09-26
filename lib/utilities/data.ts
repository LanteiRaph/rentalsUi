import {MdSpaceDashboard,MdPayments} from 'react-icons/md'
import {AiFillAppstore,AiOutlineUsergroupAdd, AiOutlineProfile} from 'react-icons/ai'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {GiTargetPoster,GiArchiveRegister, GiFamilyHouse} from 'react-icons/gi'
import {HiOutlineLogin}  from 'react-icons/hi'



export const Navbar = [
    {
        name:'Dashoard',
        list:[
            {name:'Home', link:'/', iconName:SiHomeassistantcommunitystore },
            {name:'Statistics', link:'/statistics', iconName:MdSpaceDashboard}
        ],
        iconName: MdSpaceDashboard
    },
    {
        name:'Applications',
        list:[
            {name:'Poster', link:'/apps/poster', iconName:GiTargetPoster},
            {name:'Register', link:'/apps/register', iconName:GiArchiveRegister},
            {name:'Statement', link: '/apps/statements', iconName:AiOutlineProfile}
        ],
        iconName: GiArchiveRegister
        
    },
    {
        name:'List',
        list:[
            {name:'Clients', link:'/list/clients', iconName:AiOutlineUsergroupAdd },
            {name:'Payments', link:'/list/payments', iconName:MdPayments},
            {name:'Houses', link:'/list/houses', iconName:GiFamilyHouse}
        ],
        iconName:GiTargetPoster
        
    },
    {
        name:'Authentication',
        list:[
            {name:'Login', link:'/api/auth/signin', iconName:HiOutlineLogin}
        ],
        iconName:HiOutlineLogin
    }
]