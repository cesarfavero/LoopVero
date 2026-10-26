# `probeErrorClass`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-media-root-observability.ts` · [README do módulo](../../../../modules/host/agent-media-root-observability-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723782-723784](../../../../../reference/runtime/host-main.cjs#L723782-L723784) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723782-723784](../../../../../reference/runtime/host-main.cjs#L723782-L723784) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723782

Chamadas escritas diretamente neste corpo: `brandedErrorClass`, `connectErrorClassOf`.

SHA-256 do trecho: `5518686c9147c9227bfca780fd800c7078a79c89239dbe4dfa76102cf32b2c65`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
