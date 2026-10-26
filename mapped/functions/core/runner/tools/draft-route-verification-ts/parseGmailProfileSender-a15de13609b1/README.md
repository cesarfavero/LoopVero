# `parseGmailProfileSender`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735036-735039](../../../../../../../reference/runtime/host-main.cjs#L735036-L735039) | `FunctionDeclaration` | não | `resultText` |
| [evaluation:540610-540613](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540610-L540613) | `FunctionDeclaration` | não | `resultText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735036-735039](../../../../../../../reference/runtime/host-main.cjs#L735036-L735039) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540610-540613](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540610-L540613) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:735036

Chamadas escritas diretamente neste corpo: `isPlainAddress`, `parseDraftConnectorRecord`.

SHA-256 do trecho: `19a0419db0d39e5bd1c6e2617eedd8821bd4cd322933a1fdb886810acf8ecb3f`.

### evaluation:540610

Chamadas escritas diretamente neste corpo: `isPlainAddress`, `parseDraftConnectorRecord`.

SHA-256 do trecho: `19a0419db0d39e5bd1c6e2617eedd8821bd4cd322933a1fdb886810acf8ecb3f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
