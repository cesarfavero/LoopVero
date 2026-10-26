# `mapAvailableModels`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/model-catalog.ts` · [README do módulo](../../../../../modules/shared/agents/model-catalog-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513609-513611](../../../../../../reference/runtime/host-main.cjs#L513609-L513611) | `FunctionDeclaration` | não | `models` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513609-513611](../../../../../../reference/runtime/host-main.cjs#L513609-L513611) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:513609

Chamadas escritas diretamente neste corpo: `.map`, `models.filter`.

SHA-256 do trecho: `739d214b3031cb2befaec28945eefc89c31b2dc06c26c34954cf82e52d914260`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
