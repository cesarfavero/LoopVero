# `requirePresent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-external-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-external-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755237-755243](../../../../../../../reference/runtime/host-main.cjs#L755237-L755243) | `FunctionDeclaration` | não | `value, field, platform2` |
| [evaluation:541117-541123](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541117-L541123) | `FunctionDeclaration` | não | `value, field, platform` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755237-755243](../../../../../../../reference/runtime/host-main.cjs#L755237-L755243) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541117-541123](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541117-L541123) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755237

Chamadas escritas diretamente neste corpo: `invariant`.

SHA-256 do trecho: `c16289a48a812c5ec650ee7b89cf32819d88e16be1b9134c02bed9000a9270fe`.

### evaluation:541117

Chamadas escritas diretamente neste corpo: `invariant`.

SHA-256 do trecho: `9cddcf06e06c5549e8689494b019abd2a9c7d1817cd2e751ce8ae20b8ca5a8f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
