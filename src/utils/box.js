import Box from '3box';

const authenticateWith3Box = async () => {
  const box = await Box.create(web3.currentProvider);
  await box.auth(['social-network:read', 'social-network:write']);
  // Other 3Box setup code
}

const loadProfileData = async (address) => {
  const box = await Box.openBox(address, window.ethereum);
  const profile = await box.public.get('profile');
  return profile;
}
