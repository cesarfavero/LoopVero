# `isRequestContextComplete`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639805-639807](../../../../../../reference/runtime/host-main.cjs#L639805-L639807) | `FunctionDeclaration` | não | `completeness` |
| [evaluation:430419-430421](../../../../../../reference/runtime/sand-eval-runner.cjs#L430419-L430421) | `FunctionDeclaration` | não | `completeness` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639805-639807](../../../../../../reference/runtime/host-main.cjs#L639805-L639807) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430419-430421](../../../../../../reference/runtime/sand-eval-runner.cjs#L430419-L430421) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:639805

Chamadas escritas diretamente neste corpo: `REQUEST_CONTEXT_COMPLETENESS_KEYS.every`.

SHA-256 do trecho: `d3fe69c00196923fb112a606e57e32a5a41f6965195b82c5b035da5e191483b6`.

### evaluation:430419

Chamadas escritas diretamente neste corpo: `REQUEST_CONTEXT_COMPLETENESS_KEYS.every`.

SHA-256 do trecho: `d3fe69c00196923fb112a606e57e32a5a41f6965195b82c5b035da5e191483b6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
