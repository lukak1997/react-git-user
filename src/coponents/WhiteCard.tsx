import './WhiteCard.css'
import cat from '../cat.jpg'
import location from '../assets/icon-location.svg'
import twiter from '../assets/icon-twitter.svg'
import chain from '../assets/icon-website.svg'
import flat  from '../assets/icon-company.svg'
import dataTypes from './TypeScript'




interface WhiteCardProps{
    isDark:boolean
    mainData:dataTypes;
    
}


function WhiteCard(props:WhiteCardProps){
    const {isDark,mainData}=props;
    return(
        <div className="card" style={{backgroundColor:isDark?'#1E2A47':''}}>
        <div className="profile-img-div">
          <img src={mainData && mainData.avatar_url}></img>
        </div>
        <div className="profile-div">
          <div className="profile-img-div2">
            <div className="wrapper">
              <div className="header">
                <h1 style={{color:isDark?'white':''}}>{mainData && mainData.login}</h1>
                <p style={{color:isDark?' #FFFFFF':''}}>{mainData &&`Joined ${mainData.created_at.slice(0,10)}`}</p>
              </div>
              <a  href={mainData && mainData.blog} target='blank'>{mainData && mainData.blog}</a>
              <p className="paragraph" style={{color:isDark?' #FFFFFF':''}}>
              {mainData && mainData.bio? mainData.bio:'perso does not has bio'}
              </p>
            </div>
          </div>
          <div className="followers-div" style={{backgroundColor:isDark?'#141D2F':''}}>
            <div>
              <p  style={{color:isDark?' #FFFFFF':''}}>Repos</p>
              <h1  style={{color:isDark?' #FFFFFF':''}}>{mainData && mainData.public_repos}</h1>
            </div>
            <div>
              <p  style={{color:isDark?' #FFFFFF':''}}>Followers</p>
              <h1  style={{color:isDark?' #FFFFFF':''}}>{mainData && mainData.followers}</h1>
            </div>
            <div>
              <p  style={{color:isDark?' #FFFFFF':''}}>Following</p>
              <h1  style={{color:isDark?' #FFFFFF':''}}>{mainData && mainData.following}</h1>
            </div>
          </div>
          <div className="footer">
            <div className='icon-wraper'>
             <div className='icon-one'>
            <img src={location} className='location-img'></img>
            <p  style={{color:isDark?' #FFFFFF':''}}className='location'>{mainData && mainData.location ? mainData.location:'not available'}</p>
            </div>
            <div className='icon-two'>
            <img src={twiter} className='twiter-img'></img>
            <p className='twiter'>Not Available</p> 
            </div>
            </div>


            <div className='icon-wraper-two'>
             <div className='icon-three'>
            <img  src={chain} className='chain-img'></img>
            <p style={{color:isDark?' #FFFFFF':''}}className='chain'>{mainData && mainData.blog ? mainData.blog:'not available'}</p>
            </div>
            <div className='icon-four'>
            <img src={flat} className='flat-img'></img>
              <p style={{color:isDark?' #FFFFFF':''}}className='flat'>{mainData && mainData.company ? mainData.company:'not available'}</p> 
            </div>
            </div>

          </div>
        </div>
      </div>
    );
  }


export default WhiteCard

export {}


