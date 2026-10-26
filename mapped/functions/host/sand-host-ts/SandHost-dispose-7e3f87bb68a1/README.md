# `SandHost.dispose`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-host.ts` · [README do módulo](../../../../modules/host/sand-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786663-786671](../../../../../reference/runtime/host-main.cjs#L786663-L786671) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786663-786671](../../../../../reference/runtime/host-main.cjs#L786663-L786671) | 0 | 0 | 3 | 0 | 0 | 0 |

### host:786663

Chamadas escritas diretamente neste corpo: `.dispose`, `.suspendWakes`, `Promise.all`, `this.hostExtensions.api`, `this.hostExtensions.stop`, `this.stopResumeOwnership`, `this.transcript.dispose`.

SHA-256 do trecho: `f82d32fb8d8b45503738cefba1a8faa38efb88c669ee02f82505d566df78dc0e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
