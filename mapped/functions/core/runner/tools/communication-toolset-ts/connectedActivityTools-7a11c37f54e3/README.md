# `connectedActivityTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communication-toolset.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communication-toolset-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763757-763762](../../../../../../../reference/runtime/host-main.cjs#L763757-L763762) | `FunctionDeclaration` | não | `host` |
| [evaluation:556805-556810](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556805-L556810) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763757-763762](../../../../../../../reference/runtime/host-main.cjs#L763757-L763762) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:556805-556810](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556805-L556810) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:763757

Chamadas escritas diretamente neste corpo: `createFetchConnectedActivityTool`, `host.gates.connectedActivity`.

SHA-256 do trecho: `8871df8e53dd04e2df3504a68c1ac574be0465db79b28adaf4d1f6d04c5abc15`.

### evaluation:556805

Chamadas escritas diretamente neste corpo: `createFetchConnectedActivityTool`, `host.gates.connectedActivity`.

SHA-256 do trecho: `8871df8e53dd04e2df3504a68c1ac574be0465db79b28adaf4d1f6d04c5abc15`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
