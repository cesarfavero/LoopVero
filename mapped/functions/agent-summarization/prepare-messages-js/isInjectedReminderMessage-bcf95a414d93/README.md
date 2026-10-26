# `isInjectedReminderMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/prepare-messages.js` · [README do módulo](../../../../modules/agent-summarization/prepare-messages-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620555-620565](../../../../../reference/runtime/host-main.cjs#L620555-L620565) | `FunctionDeclaration` | não | `message` |
| [evaluation:304909-304919](../../../../../reference/runtime/sand-eval-runner.cjs#L304909-L304919) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620555-620565](../../../../../reference/runtime/host-main.cjs#L620555-L620565) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:304909-304919](../../../../../reference/runtime/sand-eval-runner.cjs#L304909-L304919) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:620555

Chamadas escritas diretamente neste corpo: `SYSTEM_REMINDER_ONLY_RE.test`, `text3.trim`, `textOnlyContentOf`, `trimmed.endsWith`, `trimmed.startsWith`.

SHA-256 do trecho: `d1e5e0c1d80e2f51310326f5533b7cb34b4f163cc40839f24963fae68524e672`.

### evaluation:304909

Chamadas escritas diretamente neste corpo: `SYSTEM_REMINDER_ONLY_RE.test`, `text3.trim`, `textOnlyContentOf`, `trimmed.endsWith`, `trimmed.startsWith`.

SHA-256 do trecho: `d1e5e0c1d80e2f51310326f5533b7cb34b4f163cc40839f24963fae68524e672`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
