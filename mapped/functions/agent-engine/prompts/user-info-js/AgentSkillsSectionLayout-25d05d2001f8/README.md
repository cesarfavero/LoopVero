# `AgentSkillsSectionLayout`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640076-640083](../../../../../../reference/runtime/host-main.cjs#L640076-L640083) | `FunctionDeclaration` | não | `{ skillItems, omittedNotice, hasOmittedSkills, hasListedSkills = skillItems.length > 0, raw, readToolName, isGpt56, pathRoots = [] }` |
| [evaluation:430690-430697](../../../../../../reference/runtime/sand-eval-runner.cjs#L430690-L430697) | `FunctionDeclaration` | não | `{ skillItems, omittedNotice, hasOmittedSkills, hasListedSkills = skillItems.length > 0, raw, readToolName, isGpt56, pathRoots = [] }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640076-640083](../../../../../../reference/runtime/host-main.cjs#L640076-L640083) | 11 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:430690-430697](../../../../../../reference/runtime/sand-eval-runner.cjs#L430690-L430697) | 11 | 0 | 0 | 2 | 0 | 0 |

### host:640076

Chamadas escritas diretamente neste corpo: `.join`, `jsx`, `jsxs`, `pathRoots.map`.

SHA-256 do trecho: `63aa0c4bdf6127bfdef92dbd94d8fa033e074a42e24db53f058e3e0e27278558`.

### evaluation:430690

Chamadas escritas diretamente neste corpo: `.join`, `jsx`, `jsxs`, `pathRoots.map`.

SHA-256 do trecho: `63aa0c4bdf6127bfdef92dbd94d8fa033e074a42e24db53f058e3e0e27278558`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
