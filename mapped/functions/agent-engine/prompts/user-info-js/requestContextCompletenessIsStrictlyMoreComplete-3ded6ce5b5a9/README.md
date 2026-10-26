# `requestContextCompletenessIsStrictlyMoreComplete`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639811-639814](../../../../../../reference/runtime/host-main.cjs#L639811-L639814) | `FunctionDeclaration` | não | `previous, current2` |
| [evaluation:430425-430428](../../../../../../reference/runtime/sand-eval-runner.cjs#L430425-L430428) | `FunctionDeclaration` | não | `previous, current2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639811-639814](../../../../../../reference/runtime/host-main.cjs#L639811-L639814) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430425-430428](../../../../../../reference/runtime/sand-eval-runner.cjs#L430425-L430428) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:639811

Chamadas escritas diretamente neste corpo: `REQUEST_CONTEXT_COMPLETENESS_KEYS.every`, `requestContextCompletenessScore`.

SHA-256 do trecho: `2511e0a2799a3a5b93959190414ef41e5348fdb282cff4763f9b50789b544027`.

### evaluation:430425

Chamadas escritas diretamente neste corpo: `REQUEST_CONTEXT_COMPLETENESS_KEYS.every`, `requestContextCompletenessScore`.

SHA-256 do trecho: `2511e0a2799a3a5b93959190414ef41e5348fdb282cff4763f9b50789b544027`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
