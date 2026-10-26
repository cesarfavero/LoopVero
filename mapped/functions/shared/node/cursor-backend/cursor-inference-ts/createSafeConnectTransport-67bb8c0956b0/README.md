# `createSafeConnectTransport`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/node/cursor-backend/cursor-inference.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225151-225164](../../../../../../../reference/runtime/host-main.cjs#L225151-L225164) | `FunctionDeclaration` | não | `options2` |
| [evaluation:512222-512235](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512222-L512235) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225151-225164](../../../../../../../reference/runtime/host-main.cjs#L225151-L225164) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512222-512235](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512222-L512235) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225151

Chamadas escritas diretamente neste corpo: `createNodeHttpClient`, `createTransport`, `validateReadWriteMaxBytes`.

SHA-256 do trecho: `f02e49a30aba8952742b28692f9de67310273ce130782f4a515389f772156f3e`.

### evaluation:512222

Chamadas escritas diretamente neste corpo: `createNodeHttpClient`, `createTransport`, `validateReadWriteMaxBytes`.

SHA-256 do trecho: `d0c8cd6c9323c77c516d27a2c4aa8c8b536132bbf6051ae6561c2750d49e29b9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
