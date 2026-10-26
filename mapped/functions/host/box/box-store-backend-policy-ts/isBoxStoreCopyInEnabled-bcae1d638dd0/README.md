# `isBoxStoreCopyInEnabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/box-store-backend-policy.ts` · [README do módulo](../../../../../modules/host/box/box-store-backend-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453419-453422](../../../../../../reference/runtime/host-main.cjs#L453419-L453422) | `FunctionDeclaration` | não | `env` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453419-453422](../../../../../../reference/runtime/host-main.cjs#L453419-L453422) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:453419

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `env.SAND_BOX_STORE_COPY_IN.trim`.

SHA-256 do trecho: `09074eaced2b84854085b0566848284e88ca0d4a72264a380c53da67c8623083`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
