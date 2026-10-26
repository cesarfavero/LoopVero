# `systemReminder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/reminders/system-reminders.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/system-reminders-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725592-725594](../../../../../../../reference/runtime/host-main.cjs#L725592-L725594) | `FunctionDeclaration` | não | `id, body` |
| [evaluation:480307-480309](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480307-L480309) | `FunctionDeclaration` | não | `id, body` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725592-725594](../../../../../../../reference/runtime/host-main.cjs#L725592-L725594) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480307-480309](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480307-L480309) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725592

Chamadas escritas diretamente neste corpo: `wrap2`.

SHA-256 do trecho: `71cb25e899a85e3a75ed3dc7156ae97497f3ae0c19bdfb37c34e627925c75ae1`.

### evaluation:480307

Chamadas escritas diretamente neste corpo: `wrap2`.

SHA-256 do trecho: `71cb25e899a85e3a75ed3dc7156ae97497f3ae0c19bdfb37c34e627925c75ae1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
