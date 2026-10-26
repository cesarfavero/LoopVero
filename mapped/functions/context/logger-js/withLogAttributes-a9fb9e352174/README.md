# `withLogAttributes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225743-225747](../../../../../reference/runtime/host-main.cjs#L225743-L225747) | `FunctionDeclaration` | não | `ctx, attributes` |
| [evaluation:2231-2235](../../../../../reference/runtime/sand-eval-runner.cjs#L2231-L2235) | `FunctionDeclaration` | não | `ctx, attributes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225743-225747](../../../../../reference/runtime/host-main.cjs#L225743-L225747) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2231-2235](../../../../../reference/runtime/sand-eval-runner.cjs#L2231-L2235) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225743

Chamadas escritas diretamente neste corpo: `createLoggerMiddleware`, `ctx.get`, `ctx.with`.

SHA-256 do trecho: `94df024afafc167a2d0655119e8d720b162f5b9e95526c54b922a2e9941944b4`.

### evaluation:2231

Chamadas escritas diretamente neste corpo: `createLoggerMiddleware`, `ctx.get`, `ctx.with`.

SHA-256 do trecho: `94df024afafc167a2d0655119e8d720b162f5b9e95526c54b922a2e9941944b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
