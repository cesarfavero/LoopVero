# `samePorts2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/orbit-service.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706403-706405](../../../../../../../reference/runtime/host-main.cjs#L706403-L706405) | `FunctionDeclaration` | não | `left, right` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706403-706405](../../../../../../../reference/runtime/host-main.cjs#L706403-L706405) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706403

Chamadas escritas diretamente neste corpo: `left.every`.

SHA-256 do trecho: `46b75c96ce66d5c886cbdc639a6af20c65c3efa917cc6213a96f9b65be23f7b8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
