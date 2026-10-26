# `describeNonVideoBytes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/video-attachments/container.ts` · [README do módulo](../../../../../../modules/core/runner/video-attachments/container-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533588-533596](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533588-L533596) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533588-533596](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533588-L533596) | 5 | 0 | 0 | 6 | 0 | 0 |

### evaluation:533588

Chamadas escritas diretamente neste corpo: `.decode`, `.replace`, `.trimStart`, `/^<(!doctype\s+html|html|head|body|script)/i.test`, `/^[[{]/.test`, `IMAGE_MARKERS.some`, `bytes.subarray`, `head.startsWith`, `new TextDecoder`.

SHA-256 do trecho: `cece53690459fb283d1d9455aa9749a71c4d05477bd39567f29c7860b60750a3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
