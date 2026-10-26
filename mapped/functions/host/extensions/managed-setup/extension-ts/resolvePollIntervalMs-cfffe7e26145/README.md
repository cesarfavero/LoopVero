# `resolvePollIntervalMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684111-684114](../../../../../../../reference/runtime/host-main.cjs#L684111-L684114) | `FunctionDeclaration` | não | `watchIntervalMsRaw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684111-684114](../../../../../../../reference/runtime/host-main.cjs#L684111-L684114) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:684111

Chamadas escritas diretamente neste corpo: `Number.isInteger`, `Number.parseInt`.

SHA-256 do trecho: `bc78ac66d70fb781e5205ee69c5535eb8bbfa35c2be008529e2ab092928acccc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
