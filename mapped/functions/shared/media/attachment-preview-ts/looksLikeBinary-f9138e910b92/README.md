# `looksLikeBinary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/attachment-preview.ts` · [README do módulo](../../../../../modules/shared/media/attachment-preview-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497184-497194](../../../../../../reference/runtime/host-main.cjs#L497184-L497194) | `FunctionDeclaration` | não | `bytes` |
| [evaluation:480721-480731](../../../../../../reference/runtime/sand-eval-runner.cjs#L480721-L480731) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497184-497194](../../../../../../reference/runtime/host-main.cjs#L497184-L497194) | 4 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:480721-480731](../../../../../../reference/runtime/sand-eval-runner.cjs#L480721-L480731) | 4 | 1 | 0 | 3 | 0 | 0 |

### host:497184

Chamadas escritas diretamente neste corpo: `bytes.subarray`.

Alvos de atribuição ou incremento: `controlBytes`.

SHA-256 do trecho: `9462f3bab5424a2e40f8e9a6d18640870e4490a5299a311bcc631dab8e0329a4`.

### evaluation:480721

Chamadas escritas diretamente neste corpo: `bytes.subarray`.

Alvos de atribuição ou incremento: `controlBytes`.

SHA-256 do trecho: `9462f3bab5424a2e40f8e9a6d18640870e4490a5299a311bcc631dab8e0329a4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
