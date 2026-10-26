# `Walker.dataCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750199-750218](../../../../../../../../reference/runtime/host-main.cjs#L750199-L750218) | `method` | não | `spec, args, scope` |
| [evaluation:523050-523069](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523050-L523069) | `method` | não | `spec, args, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750199-750218](../../../../../../../../reference/runtime/host-main.cjs#L750199-L750218) | 8 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:523050-523069](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523050-L523069) | 8 | 0 | 0 | 6 | 0 | 0 |

### host:750199

Chamadas escritas diretamente neste corpo: `arrayOf`, `isDataLike`, `isObjectKind`, `join120`, `this.dataOnly`, `this.plainArgs`.

SHA-256 do trecho: `fcdd21f57630d6ae16eaaccf2cb911ee30cf432cd1ea5a587d9f530ee1869938`.

### evaluation:523050

Chamadas escritas diretamente neste corpo: `arrayOf2`, `isDataLike`, `isObjectKind`, `join8`, `this.dataOnly`, `this.plainArgs`.

SHA-256 do trecho: `714a304a739d38eb3341d3b697f9cfedcd5a9de40193626b4dc4668e08043277`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
