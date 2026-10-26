# `isScmReconnectShapedRejection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/scm-connect-cards.ts` · [README do módulo](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509214-509218](../../../../../../../reference/runtime/host-main.cjs#L509214-L509218) | `FunctionDeclaration` | não | `rejection` |
| [evaluation:556939-556943](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556939-L556943) | `FunctionDeclaration` | não | `rejection` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509214-509218](../../../../../../../reference/runtime/host-main.cjs#L509214-L509218) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556939-556943](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556939-L556943) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509214

Chamadas escritas diretamente neste corpo: `/please reconnect (github|gitlab|bitbucket|azure|your source control integration)/i.test`.

SHA-256 do trecho: `65edc573543dc44fa42f3662f4752bbdcfdc11f0350b601fb9fa52cc28ba4d8f`.

### evaluation:556939

Chamadas escritas diretamente neste corpo: `/please reconnect (github|gitlab|bitbucket|azure|your source control integration)/i.test`.

SHA-256 do trecho: `65edc573543dc44fa42f3662f4752bbdcfdc11f0350b601fb9fa52cc28ba4d8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
