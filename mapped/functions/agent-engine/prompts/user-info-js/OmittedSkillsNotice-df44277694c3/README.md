# `OmittedSkillsNotice`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640087-640089](../../../../../../reference/runtime/host-main.cjs#L640087-L640089) | `FunctionDeclaration` | não | `{ directories, omittedCount }` |
| [evaluation:430701-430703](../../../../../../reference/runtime/sand-eval-runner.cjs#L430701-L430703) | `FunctionDeclaration` | não | `{ directories, omittedCount }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640087-640089](../../../../../../reference/runtime/host-main.cjs#L640087-L640089) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430701-430703](../../../../../../reference/runtime/sand-eval-runner.cjs#L430701-L430703) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640087

Chamadas escritas diretamente neste corpo: `directories.join`, `jsx`.

SHA-256 do trecho: `01c90e65d6e4e959981716be58667b485c1d8074ba2fcd9ebcf7ec8ca23a6de0`.

### evaluation:430701

Chamadas escritas diretamente neste corpo: `directories.join`, `jsx`.

SHA-256 do trecho: `01c90e65d6e4e959981716be58667b485c1d8074ba2fcd9ebcf7ec8ca23a6de0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
