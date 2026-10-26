# `createSandBackendTransport`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/node/cursor-backend/cursor-inference.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225165-225175](../../../../../../../reference/runtime/host-main.cjs#L225165-L225175) | `FunctionDeclaration` | não | `options2` |
| [evaluation:512236-512246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512236-L512246) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225165-225175](../../../../../../../reference/runtime/host-main.cjs#L225165-L225175) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512236-512246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512236-L512246) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225165

Chamadas escritas diretamente neste corpo: `createSafeConnectTransport`, `createSandInferenceInterceptor`, `createSandRpcTracingInterceptor`.

SHA-256 do trecho: `534008fa874d720d29a62564b291140f8cb1fb596a947ff4996ea94674991e08`.

### evaluation:512236

Chamadas escritas diretamente neste corpo: `createSafeConnectTransport`, `createSandInferenceInterceptor`, `createSandRpcTracingInterceptor`.

SHA-256 do trecho: `534008fa874d720d29a62564b291140f8cb1fb596a947ff4996ea94674991e08`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
