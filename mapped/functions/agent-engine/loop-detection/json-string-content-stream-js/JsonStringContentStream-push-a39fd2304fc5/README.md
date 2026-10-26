# `JsonStringContentStream.push`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/json-string-content-stream.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/json-string-content-stream-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624855-624894](../../../../../../reference/runtime/host-main.cjs#L624855-L624894) | `method` | não | `chunk` |
| [evaluation:311573-311612](../../../../../../reference/runtime/sand-eval-runner.cjs#L311573-L311612) | `method` | não | `chunk` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624855-624894](../../../../../../reference/runtime/host-main.cjs#L624855-L624894) | 9 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:311573-311612](../../../../../../reference/runtime/sand-eval-runner.cjs#L311573-L311612) | 9 | 1 | 0 | 1 | 0 | 0 |

### host:624855

Chamadas escritas diretamente neste corpo: `Number.isNaN`, `Number.parseInt`, `String.fromCharCode`.

Alvos de atribuição ou incremento: `out`, `this.inEscape`, `this.inString`, `this.unicodeHex`.

SHA-256 do trecho: `26813b75bc8e23cb8bc906437617f7520782c6f9a2c888f86919baf6ad8134c5`.

### evaluation:311573

Chamadas escritas diretamente neste corpo: `Number.isNaN`, `Number.parseInt`, `String.fromCharCode`.

Alvos de atribuição ou incremento: `out`, `this.inEscape`, `this.inString`, `this.unicodeHex`.

SHA-256 do trecho: `26813b75bc8e23cb8bc906437617f7520782c6f9a2c888f86919baf6ad8134c5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
