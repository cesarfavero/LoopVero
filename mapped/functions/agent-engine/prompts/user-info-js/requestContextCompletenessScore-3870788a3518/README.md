# `requestContextCompletenessScore`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639808-639810](../../../../../../reference/runtime/host-main.cjs#L639808-L639810) | `FunctionDeclaration` | não | `completeness` |
| [evaluation:430422-430424](../../../../../../reference/runtime/sand-eval-runner.cjs#L430422-L430424) | `FunctionDeclaration` | não | `completeness` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639808-639810](../../../../../../reference/runtime/host-main.cjs#L639808-L639810) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430422-430424](../../../../../../reference/runtime/sand-eval-runner.cjs#L430422-L430424) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:639808

Chamadas escritas diretamente neste corpo: `REQUEST_CONTEXT_COMPLETENESS_KEYS.filter`.

SHA-256 do trecho: `d2173dc68e02988fc393fed23d5af536c392478de240165f4f537594e82ef9c1`.

### evaluation:430422

Chamadas escritas diretamente neste corpo: `REQUEST_CONTEXT_COMPLETENESS_KEYS.filter`.

SHA-256 do trecho: `d2173dc68e02988fc393fed23d5af536c392478de240165f4f537594e82ef9c1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
