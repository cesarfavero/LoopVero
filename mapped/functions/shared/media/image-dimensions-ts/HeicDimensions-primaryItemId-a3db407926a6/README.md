# `_HeicDimensions.primaryItemId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497359-497366](../../../../../../reference/runtime/host-main.cjs#L497359-L497366) | `method` | não | `view, pitm` |
| [evaluation:515057-515064](../../../../../../reference/runtime/sand-eval-runner.cjs#L515057-L515064) | `method` | não | `view, pitm` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497359-497366](../../../../../../reference/runtime/host-main.cjs#L497359-L497366) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:515057-515064](../../../../../../reference/runtime/sand-eval-runner.cjs#L515057-L515064) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:497359

Chamadas escritas diretamente neste corpo: `view.getUint16`, `view.getUint32`, `view.getUint8`.

SHA-256 do trecho: `46d10b35d6ef70ceebba1d0199636626e121d91218707de0d7fd0cc37654e1bd`.

### evaluation:515057

Chamadas escritas diretamente neste corpo: `view.getUint16`, `view.getUint32`, `view.getUint8`.

SHA-256 do trecho: `46d10b35d6ef70ceebba1d0199636626e121d91218707de0d7fd0cc37654e1bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
