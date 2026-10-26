# `renderAgentSkillItems`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640084-640086](../../../../../../reference/runtime/host-main.cjs#L640084-L640086) | `FunctionDeclaration` | não | `skills` |
| [evaluation:430698-430700](../../../../../../reference/runtime/sand-eval-runner.cjs#L430698-L430700) | `FunctionDeclaration` | não | `skills` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640084-640086](../../../../../../reference/runtime/host-main.cjs#L640084-L640086) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430698-430700](../../../../../../reference/runtime/sand-eval-runner.cjs#L430698-L430700) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640084

Chamadas escritas diretamente neste corpo: `skills.map`.

SHA-256 do trecho: `b362a0b640c35f7005671deede23f6ad5a9ead9d692135235587eaa1723c6daa`.

### evaluation:430698

Chamadas escritas diretamente neste corpo: `skills.map`.

SHA-256 do trecho: `b362a0b640c35f7005671deede23f6ad5a9ead9d692135235587eaa1723c6daa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
