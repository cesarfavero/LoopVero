# `maskRuns`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-notification-text.ts` · [README do módulo](../../../../../modules/shared/media/markdown-notification-text-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722196-722205](../../../../../../reference/runtime/host-main.cjs#L722196-L722205) | `FunctionDeclaration` | não | `text3, runs, literals` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722196-722205](../../../../../../reference/runtime/host-main.cjs#L722196-L722205) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:722196

Chamadas escritas diretamente neste corpo: `literals.push`, `text3.slice`.

Alvos de atribuição ou incremento: `cursor`, `masked`.

SHA-256 do trecho: `1f3d7372fd94fc7e3c9cf04d21de5e89944693f0a64e2b900ceb90cf6884aa31`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
