import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';
import { AppRouter } from '../../routers/AppRouter';


describe('Pruebas en AppRouter', () => {

    test('Debe mostrar login si no está autenticado', () => {
        
        const contextValue = {
            user: {
                logged: false
            }
        };
    
        const wrapper = mount( 
            <AuthContext.Provider value = { contextValue } >
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('LoginScreen');

    });

    test('Debe mostrar el componente Marvel si está autenticado', () => {
        
        const contextValue = {
            user: {
                logged: true,
                name: 'Pepe'
            }
        };
    
        const wrapper = mount( 
            <AuthContext.Provider value = { contextValue } >
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);

    });



})