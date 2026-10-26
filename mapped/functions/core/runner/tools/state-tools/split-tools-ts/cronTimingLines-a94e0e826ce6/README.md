# `cronTimingLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771894-771910](../../../../../../../../reference/runtime/host-main.cjs#L771894-L771910) | `FunctionDeclaration` | não | `trigger2` |
| [evaluation:571127-571143](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571127-L571143) | `FunctionDeclaration` | não | `trigger` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771894-771910](../../../../../../../../reference/runtime/host-main.cjs#L771894-L771910) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571127-571143](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571127-L571143) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:771894

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `lines2.push`.

SHA-256 do trecho: `8f561e965418daafc0ea5f1cdd8076b92f6779a9dfe73fedb58c5868e3cdcc10`.

### evaluation:571127

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `lines2.push`.

SHA-256 do trecho: `4d523cc5c37ce03801c9dcd616b2eab46889a9dfcb30736fd9a30520b7fafa10`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
