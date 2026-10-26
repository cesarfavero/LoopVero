# `isSyntheticUserTurnMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/prepare-messages.js` · [README do módulo](../../../../modules/agent-summarization/prepare-messages-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620567-620569](../../../../../reference/runtime/host-main.cjs#L620567-L620569) | `FunctionDeclaration` | não | `message` |
| [evaluation:304921-304923](../../../../../reference/runtime/sand-eval-runner.cjs#L304921-L304923) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620567-620569](../../../../../reference/runtime/host-main.cjs#L620567-L620569) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304921-304923](../../../../../reference/runtime/sand-eval-runner.cjs#L304921-L304923) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620567

Chamadas escritas diretamente neste corpo: `isInjectedReminderMessage`.

SHA-256 do trecho: `fb15f768909d67406c97b11a1e2594ef7e3bfa0658914939833ffe8615cf16ad`.

### evaluation:304921

Chamadas escritas diretamente neste corpo: `isInjectedReminderMessage`.

SHA-256 do trecho: `fb15f768909d67406c97b11a1e2594ef7e3bfa0658914939833ffe8615cf16ad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
