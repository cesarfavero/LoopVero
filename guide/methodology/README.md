# Evidence method

## Fonte de verdade

As referências versionadas são a fonte primária. O commit de origem é `655acca99bff0d17466547611108f94ed6a8a5e7`; os arquivos foram reorganizados em `reference/` preservando bytes e modo Git. O [manifesto](../../mapped/inventory/original-files.json) permite comparar cada blob com a referência. Não usamos a implementação anterior do aplicativo como prova sobre o harness.

Os nomes das pastas são próprios desta organização. Nomes internos de classes, funções, caminhos lógicos nos comentários do compilador e contratos permanecem na evidência. Não foram apagados ou alterados para sustentar uma narrativa diferente.

## Como uma conclusão foi produzida

1. Localizar o módulo e o corpo efetivo no bundle.
2. Identificar entrada, condições, dependências, efeitos e resultado.
3. Rastrear o chamador quando existir no mesmo acervo.
4. Comparar host e executor sem preencher um com suposições do outro.
5. Registrar uma implementação remota, configuração ou caminho ausente como lacuna.
6. Citar caminhos e intervalos de linhas LF do arquivo original reorganizado.

Esse procedimento descreve análise dos arquivos presentes, sem instruções para obtê-los ou reproduzir uma extração.

## Catálogo automático

O parser Acorn 8.18.0 analisa a AST de três bundles: host, executor de avaliação e worker de estado. O script não importa nem executa o código analisado. Os comentários de origem do compilador delimitam módulos; origens repetidas permanecem como seções diferentes.

O recorte seleciona os módulos do núcleo do harness, host, tipos e serviços compartilhados, avaliação e dependências diretamente relacionadas a inferência, contexto, transcript, memória de execução e sumarização. Bibliotecas vendorizadas gerais e todos os protocolos gerados não são apresentados como funções próprias do harness. Seus arquivos continuam no acervo original.

Cada função, método ou closure nomeada tem parâmetros, async/generator, intervalo, hash do trecho, chamadas escritas no corpo, alvos de atribuição e contagens sintáticas. Funções internas são visitadas separadamente. Callbacks anônimos permanecem no código de origem, mas não recebem nome inventado nem README próprio.

As fichas são agrupadas por módulo e nome qualificado. Se duas ocorrências partilham esse nome, ambas são listadas. Sufixos numéricos criados pelo bundler são preservados. Esse agrupamento não equivale à reconstrução de identidade semântica de todas as funções TypeScript originais.

## O que a AST não prova

- Uma chamada `obj.method()` não prova qual implementação o objeto contém em runtime.
- Um símbolo presente não prova que ele pode ser alcançado pela entrada ativa.
- Uma string de prompt descreve uma instrução; sua existência não comprova aplicação por um chamador.
- Uma propriedade de configuração não prova seu valor em produção.
- Um nome de função não substitui a leitura de seu corpo.
- Contagem de ramos não mede complexidade cognitiva nem cobre toda expressão lógica de curto-circuito.
- Atribuições não capturam todos os efeitos de métodos chamados, mutações nativas ou efeitos remotos.
- As fichas não inferem tipos ausentes nem inventam formatos de retorno.

## Verificações

O verificador confere tamanho e Git blob SHA-1 dos originais disponíveis, SHA-256 dos três bundles analisados, referências relativas dos READMEs, intervalos de linhas das fontes disponíveis, presença das fichas e ausência das antigas superfícies de aplicativo no resultado preparado. A publicação também deve comparar o manifesto integral com a árvore remota para verificar todos os 1.070 arquivos sem executar nenhum deles.

Para numeração, os scripts contam apenas LF (`\n`). Separadores Unicode dentro de strings não podem deslocar as âncoras do GitHub; por isso não usamos `str.splitlines()` para calcular linhas de fonte.

## Limite operacional

Nenhuma execução original contra o backend, modelo, máquina remota, conta conectada ou autenticação real foi feita. O estudo valida conteúdo, estrutura e coerência das ligações estáticas. Um teste de comportamento exigiria ambiente próprio e contratos que não estão integralmente disponíveis. O guia não afirma paridade funcional ou reimplementação concluída.
