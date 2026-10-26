# `carryBoxSecretsToBot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/secrets/bot-secret-carry.ts` · [README do módulo](../../../../../../modules/host/extensions/secrets/bot-secret-carry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:709020-709033](../../../../../../../reference/runtime/host-main.cjs#L709020-L709033) | `FunctionDeclaration` | sim | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709020-709033](../../../../../../../reference/runtime/host-main.cjs#L709020-L709033) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:709020

Chamadas escritas diretamente neste corpo: `carrySecretsToGrokBot`, `deps.readCard`.

SHA-256 do trecho: `600cb494cd697683df78bdcaeba7b456d518c372b3abb1e49dec3b0d81ac26ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
