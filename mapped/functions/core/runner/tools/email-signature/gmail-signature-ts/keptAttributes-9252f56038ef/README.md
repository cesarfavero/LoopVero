# `keptAttributes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755768-755788](../../../../../../../../reference/runtime/host-main.cjs#L755768-L755788) | `FunctionDeclaration` | não | `{   tag,   source }` |
| [evaluation:541643-541663](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541643-L541663) | `FunctionDeclaration` | não | `{   tag,   source }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755768-755788](../../../../../../../../reference/runtime/host-main.cjs#L755768-L755788) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:541643-541663](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541643-L541663) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:755768

Chamadas escritas diretamente neste corpo: `.some`, `Array.from`, `attribute`, `attributes.get`, `imageSize`, `new Map`, `safeUrl`, `source.matchAll`.

SHA-256 do trecho: `3dd56d3810c6e53289f7dda640adb8642e03bafe677ef08fd8dc83c3f0ddc405`.

### evaluation:541643

Chamadas escritas diretamente neste corpo: `.some`, `Array.from`, `attribute`, `attributes.get`, `imageSize`, `new Map`, `safeUrl`, `source.matchAll`.

SHA-256 do trecho: `3dd56d3810c6e53289f7dda640adb8642e03bafe677ef08fd8dc83c3f0ddc405`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
