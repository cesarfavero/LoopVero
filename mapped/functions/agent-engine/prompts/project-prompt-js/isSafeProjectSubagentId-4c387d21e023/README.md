# `isSafeProjectSubagentId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640994-640996](../../../../../../reference/runtime/host-main.cjs#L640994-L640996) | `FunctionDeclaration` | não | `value` |
| [evaluation:431607-431609](../../../../../../reference/runtime/sand-eval-runner.cjs#L431607-L431609) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640994-640996](../../../../../../reference/runtime/host-main.cjs#L640994-L640996) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431607-431609](../../../../../../reference/runtime/sand-eval-runner.cjs#L431607-L431609) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640994

Chamadas escritas diretamente neste corpo: `/^[A-Za-z0-9][A-Za-z0-9._:-]*$/u.test`.

SHA-256 do trecho: `24c97dea2cc60cc133a59c6110da1189f293a0b35b7fb5a3338afe5fec1f4a48`.

### evaluation:431607

Chamadas escritas diretamente neste corpo: `/^[A-Za-z0-9][A-Za-z0-9._:-]*$/u.test`.

SHA-256 do trecho: `24c97dea2cc60cc133a59c6110da1189f293a0b35b7fb5a3338afe5fec1f4a48`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
