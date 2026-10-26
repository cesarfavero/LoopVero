# `createLogger/log`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:21595-21599](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21595-L21599) | `FunctionDeclaration` | não | `ctx, entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:21595-21599](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21595-L21599) | 0 | 0 | 0 | 0 | 0 | 0 |

### state-worker:21595

Chamadas escritas diretamente neste corpo: `getLoggerBackend`, `logger7.log`, `new Date`.

SHA-256 do trecho: `a1d26730a0f35c45005d0821d1bd405ee0813066554a044d820e8e089ba9018e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
