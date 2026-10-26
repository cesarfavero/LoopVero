# `clampAgentActivityRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/agent-activity.ts` · [README do módulo](../../../../../modules/core/ports/agent-activity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765362-765380](../../../../../../reference/runtime/host-main.cjs#L765362-L765380) | `FunctionDeclaration` | não | `request5` |
| [evaluation:558729-558747](../../../../../../reference/runtime/sand-eval-runner.cjs#L558729-L558747) | `FunctionDeclaration` | não | `request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765362-765380](../../../../../../reference/runtime/host-main.cjs#L765362-L765380) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558729-558747](../../../../../../reference/runtime/sand-eval-runner.cjs#L558729-L558747) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765362

Chamadas escritas diretamente neste corpo: `clampPositiveInt`.

SHA-256 do trecho: `3579d178a2fec900f5ee5760e7cadd3d2e295d2498ad3430eabb36b53aa47380`.

### evaluation:558729

Chamadas escritas diretamente neste corpo: `clampPositiveInt`.

SHA-256 do trecho: `c06d3cbaa8f641b24fdcf331e298dfb44ccc457537178c240f9c2830a039763f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
