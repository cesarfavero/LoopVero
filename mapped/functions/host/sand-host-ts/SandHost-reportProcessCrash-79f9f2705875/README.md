# `SandHost.reportProcessCrash`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-host.ts` · [README do módulo](../../../../modules/host/sand-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786382-786387](../../../../../reference/runtime/host-main.cjs#L786382-L786387) | `method` | não | `_error, kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786382-786387](../../../../../reference/runtime/host-main.cjs#L786382-L786387) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:786382

Chamadas escritas diretamente neste corpo: `.logs.reportHostCrash`, `this.hostExtensions.api`.

SHA-256 do trecho: `ca32ea93c58a4bc70a09e74c47d6600a9e3050d1a38f4131141e4ee66144ba77`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
