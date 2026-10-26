# `negationReaches`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/workspace-ignore.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/workspace-ignore-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:482333-482338](../../../../../../../reference/runtime/host-main.cjs#L482333-L482338) | `FunctionDeclaration` | não | `reach, relDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482333-482338](../../../../../../../reference/runtime/host-main.cjs#L482333-L482338) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:482333

Chamadas escritas diretamente neste corpo: `prefix.startsWith`, `relDir.startsWith`.

SHA-256 do trecho: `a71c8ec99c3aa3d1cbde0334b36032b00b318c68ea1172a638b914f7058e51a2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
