# `errorMessageWithErrorDetailsReason`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725058-725066](../../../../../../../reference/runtime/host-main.cjs#L725058-L725066) | `FunctionDeclaration` | não | `error64` |
| [evaluation:480029-480037](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480029-L480037) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725058-725066](../../../../../../../reference/runtime/host-main.cjs#L725058-L725066) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:480029-480037](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480029-L480037) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:725058

Chamadas escritas diretamente neste corpo: `[computed].details.detail.trim`, `error64.findDetails`, `errorMessage`, `new ConnectError`.

SHA-256 do trecho: `41141765886271342a25c0c3be90f252dce536b1d5597f9f4c064e7349dfc385`.

### evaluation:480029

Chamadas escritas diretamente neste corpo: `[computed].details.detail.trim`, `error63.findDetails`, `errorMessage2`, `new ConnectError`.

SHA-256 do trecho: `6964af980ed683c5bc5742c1a6a158732d337971e45b8009b33ae6e602a071ed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
