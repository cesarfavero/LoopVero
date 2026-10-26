# `getNamedAgentSessionPromptContext`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/cloud-meta-agent/index.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/cloud-meta-agent/index-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:635750-635758](../../../../../../../reference/runtime/host-main.cjs#L635750-L635758) | `FunctionDeclaration` | não | `props` |
| [evaluation:423807-423815](../../../../../../../reference/runtime/sand-eval-runner.cjs#L423807-L423815) | `FunctionDeclaration` | não | `props` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:635750-635758](../../../../../../../reference/runtime/host-main.cjs#L635750-L635758) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:423807-423815](../../../../../../../reference/runtime/sand-eval-runner.cjs#L423807-L423815) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:635750

Chamadas escritas diretamente neste corpo: `props.namedAgentId.trim`, `props.namedAgentSessionKey.trim`, `props.namedAgentSessionKind.trim`.

SHA-256 do trecho: `afeda91d68e073493460b0b7ad50b7be5e6a6659ecf4bf05ccab28c15b762d9c`.

### evaluation:423807

Chamadas escritas diretamente neste corpo: `props.namedAgentId.trim`, `props.namedAgentSessionKey.trim`, `props.namedAgentSessionKind.trim`.

SHA-256 do trecho: `afeda91d68e073493460b0b7ad50b7be5e6a6659ecf4bf05ccab28c15b762d9c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
